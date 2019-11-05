import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'cats-input',
  styleUrl: 'cats-input.css',
  shadow: false
})
export class CatsInput {

  /**
   * The label for the input
   */
  @Prop() label: string;

  /**
   * The tooltip for the input
   */
  @Prop() tooltip: string;

  /**
   * The current value for the input
   */
  @Prop() current: string;

  /**
   * Function to handle input change and affect state
   */
  @Prop() change: (event: Event) => void;

  render() {
    return (
      <label>
        {this.label}
        <input type="text" value={this.current} class="modifier-class" onChange={this.change} required />
      </label>
    );
  }

}
