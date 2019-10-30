import { Component, Prop, Method, h } from '@stencil/core';
import { BasicSetting } from '../../utils/utils';

@Component({
  tag: 'basic-card',
  styleUrl: 'basic-card.css',
  shadow: false
})
export class BasicCard {

  /**
   * The title for the card
   */
  @Prop() cardTitle: string;

  /**
   * The text to be displayed on the card
   */
  @Prop() cardText: string;

  /**
   * If the card should be collapsed
   */
  @Prop() collapsible: boolean;

  /**
   * Settings to be shown in card
   */
  @Prop() settings: BasicSetting[];

  /**
   * Exportable prop for current json config
   * Using @state as only internal but will trigger re-rendering on change
   */
  // @State()
  currentState: {};

  /**
   * Props added for testing
   */
  jsonDisplayCode: HTMLElement;
  jsonDisplayPanel: HTMLElement;
  closeStyling = {  position: 'absolute',
                    right: '0.75rem',
                    top: '0.75rem' };
  collapseStyling = { position: 'absolute',
                      right: '0.75rem',
                      top: '1.50rem',
                      border: 'none',
                      'font-size': '14px'
                    };

  @Method()
  async changeState(state: any) {
    this.currentState = {...this.currentState, ...state};
    console.log(this.currentState);
  }

  // @Listen('change')
  // Adding @Listen causes function to listen to all change events
  handleChange(fieldName, event) {
    event.stopPropagation();
    if(fieldName)
      this.changeState({[fieldName]: event.target.value});
  }

  handleCheckboxChange(fieldName, event) {
    event.stopPropagation();
    if(fieldName)
      this.changeState({[fieldName]: event.target.checked});
  }

  handleFauxSave(event) {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('jsonDisplayPanel').classList.remove("hide");
    document.getElementById('jsonDisplayCode').innerHTML = JSON.stringify(this.currentState, null, '\n');
  }

  handleFauxClose(event) {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('jsonDisplayPanel').classList.add("hide");
  }

  handleFauxCollapse(event) {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('collapseContainer').classList.toggle('hide');
    document.getElementById('up-arrow').classList.toggle('hide');
    document.getElementById('down-arrow').classList.toggle('hide');
  }

  private cycleSettings(): any {
    return this.settings.map((setting) => {
      switch (setting.type) {
        case "string":
          console.log("string");
          return (
            <basic-string
              label={setting.label}
              tooltip={setting.tooltip}
              change={this.handleChange.bind(this,setting.fieldName)}
            ></basic-string>
          );
        case "boolean":
          console.log("boolean");
          return (
            <basic-checkbox
              label={setting.label}
              tooltip={setting.tooltip}
              checked={false}
              change={this.handleCheckboxChange.bind(this,setting.fieldName)}
            ></basic-checkbox>
          );
        case "options":
          console.log("options");
          return (
            <basic-string
              label={setting.label}
              tooltip={setting.tooltip}
              change={this.handleChange.bind(this,setting.fieldName)}
            ></basic-string>
          );
        default:
          console.log("default");
          return (
            <basic-string
              label={setting.label}
              tooltip={setting.tooltip}
              change={this.handleChange.bind(this,setting.fieldName)}
            ></basic-string>
          );
      }
    });
  }

  private parseHtml(html: string): any {
    let div = document.createElement('div');
    div.innerHTML = html;
    let text = div.textContent || div.innerText || ""
    return text;
  }

  render() {
    const collapseArrow = (<button class="container-close" style={this.collapseStyling} onClick={this.handleFauxCollapse.bind(this)}>
                          <svg id='up-arrow' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" class="svg-icon"><path d="M4 23v-5L16 6l12 12v5L16 11 4 23z"/></svg>
                          <svg id='down-arrow' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" class="svg-icon hide"><path d="M28 9v5L16 26 4 14V9l12 12L28 9z"/></svg>
                        </button>);
    return (
      <div class="card card-bar-blue block trailer-1" style={{'width': '350px'}}>
        <div class="card-content">
          <h4 class="trailer-0">{this.parseHtml(this.cardTitle)}</h4>
          <div class="container leader-1" id="collapseContainer">
            {this.cardText ? (<p class="font-size--1">{this.cardText}</p>) : ('')}
            {this.settings ? this.cycleSettings() : ''}
            <a href="#" class="btn btn-clear btn-fill leader-1" onClick={this.handleFauxSave.bind(this)}>Save</a>
            <div class="panel panel-blue hide leader-2" id="jsonDisplayPanel" style={{position: 'relative'}}>
              <h5 class="trailer-half">Output JSON</h5>
              <code id="jsonDisplayCode" class="trailer-0 leader-1" style={{'display': 'block', 'overflow-wrap': 'break-word'}}></code>
                {/* <!-- close button --> */}
                <button class="alert-close" style={this.closeStyling} onClick={this.handleFauxClose.bind(this)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" class="svg-icon">
                    <path d="M18.404 16l9.9 9.9-2.404 2.404-9.9-9.9-9.9 9.9L3.696 25.9l9.9-9.9-9.9-9.898L6.1 3.698l9.9 9.899 9.9-9.9 2.404 2.406-9.9 9.898z"/>
                  </svg>
                </button>
            </div>
          </div>
          {this.collapsible ? collapseArrow : ''}
        </div>
      </div>
    );
  }

  /**
   * Example card
   * <div class="card card-bar-blue block trailer-1">
          <div class="card-content">
            <h4>Card with Colored Bar</h4>
            <p class="font-size--1 card-last">Every color can in calcite can be used as a colored "bar" along the top of a card to provide a bit visual punch with...</p>
            <a href="../color/#ui-colors" class="btn btn-clear btn-fill leader-1">What colors?</a>
          </div>
        </div>
   */

}


/**
* What should be in the basic wrapper
* [x] Should take in a title, text, settings params
* [x] [expandable?] i.e. collapsed.
*  - [] collapse by default
* [x] print title and text into card and cycle settings?
* [] Should init with saved configurations
* [] returns a object of settings altered with save/exit
*  - [x] for temp, onClick save btn print out json to bottom of page
*/
