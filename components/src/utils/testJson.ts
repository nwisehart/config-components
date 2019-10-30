export const testJSON = [{
  "category": "<b>General</b>",
  "fields": [
  {
    "type": "string",
    "fieldName": "title",
    "tooltip": "Use this to introduce the subject of your gallery.",
    "label": "Title of your application"
  }, {
    "label": "Include a Sign In button",
    "fieldName": "showSignInBtn",
    "type": "boolean",
    "tooltip": "If enabled, will show the sign in button in the top right of the header"
  }, {
    "fieldName": "legendWidget",
    "label": "Include a Legend on the map",
    "type": "options",
    "options": [{
      "label": "Top Left",
      "value": "top-left"
    }, {
      "label": "Top Right",
      "value": "top-right"
    }, {
      "label": "Bottom Right",
      "value": "bottom-right"
    }, {
      "label": "Bottom Left",
      "value": "bottom-left"
    }, {
      "label": "Hide",
      "value": " "
    }],
    "tooltip": "When enabled, this will add a legend to the map allowing users to interpret the symbology used."
  }]
}];

// const outputJSON = {
//   "title": "test",
//   "showSignInBtn": true,
//   "legendWidget": "bottom-right"
// };
