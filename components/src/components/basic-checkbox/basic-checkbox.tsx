import { Component, Prop, h, Listen } from '@stencil/core';

@Component({
  tag: 'basic-checkbox',
  styleUrl: 'basic-checkbox.css',
  shadow: false
})
export class BasicCheckbox {

  /**
   * The label for the checkbox
   */
  @Prop() label: string;

  /**
   * The tooltip for the checkbox
   */
  @Prop() tooltip: string;

  /**
   * The current value for the checkbox
   */
  @Prop() checked: boolean;

  /**
   * Function to handle input change and affect state
   */
  @Prop() change: (event: Event) => void;

  @Listen('change')
  handleCheckboxChange(event){
    this.change(event);
  }

  render() {
    return (
      <label>
        <input type="checkbox" checked={this.checked} />
        {this.label}
      </label>
    );
  }
/**
 * Code for toggle instead of checkbox
 */
//   <label class="toggle-switch modifier-class">
//   <input type="checkbox" class="toggle-switch-input">
//   <span class="toggle-switch-track margin-right-1"></span>
//   <span class="toggle-switch-label font-size--1">Inline example</span>
// </label>
}
