import { Component, Prop, Listen, h } from '@stencil/core';

interface Option {
  label: string;
  value: string;
}

@Component({
  tag: 'basic-select',
  styleUrl: 'basic-select.css',
  shadow: false
})
export class BasicSelect {

  /**
   * The label for the select dropdown
   */
  @Prop() label: string;

  /**
   * The tooltip for the select dropdown
   */
  @Prop() tooltip: string;

  /**
   * The options for the select dropdown
   */
  @Prop() options: Option[];

  /**
   * The current value for the select dropdown
   */
  @Prop() current: string;

  /**
   * Function to handle select dropdown change and affect state
   */
  @Prop() change: (event: Event) => void;

  @Listen('change')
  handleCheckboxChange(event){
    this.change(event);
  }

  render() {
    return (
      <label>
        {this.label}
        <select class="select-full">
          {this.options.map((option) => {
            return (<option value={option.value}>{option.label}</option>)
          })}
        </select>
      </label>
    );
  }

}
