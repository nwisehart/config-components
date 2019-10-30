import { Component, h } from '@stencil/core';
import { testJSON } from '../../utils/testJson';


@Component({
  tag: 'test-component',
  styleUrl: 'test-component.css',
  shadow: false
})
export class TestComponent {
  /**
   * The first name
   */
  // @Prop() first: string;

  render() {
    return (
      <div class="block-group block-group-3-up tablet-block-group-2-up phone-block-group-1-up">
        {testJSON.map((value) => {
          return <basic-card cardTitle={value.category} settings={value.fields}></basic-card>
        })}
      </div>
    )
  }
}
