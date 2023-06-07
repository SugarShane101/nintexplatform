import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class HelloWorld extends LitElement {
  
  static properties = {
    who: {type: String},
  };
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Hello World',
      fallbackDisableSubmit: false,
      version: '1.2',
      properties: { //A custom configuration field. See https://help.nintex.com/en-US/formplugins/Reference/CustomField.htm
        who: {
          type: 'string',
          title: 'Who',
          description: 'Who to say hello to'
        }
      }
    };
  }
  
  constructor() {
    super();
    this.who = 'World';
  }

  render() {
    return html`
    <html>

  <head>

    <!-- Add tokenizer.js file to head or end of body based upon your application setup -->

    <script language="javascript" src="https://sandbox.basysiqpro.com/tokenizer/tokenizer.js"></script>

  </head>

  <body>

    <!-- Add div with id, that we will reference below, for where iframe form will go -->

    <div id="container"></div>




    <!-- Add button to call submit -->

    <button onclick="example.submit()">Submit</button>




    Hello World Again!

    <!-- Add script tag -->

    <script>

      var example = new Tokenizer({

        url: '', // Optional - Only needed if domain is different than the one your on, example: localhost

        apikey: 'pub_2IXtdLBw3FIawhtxJrsUYmzaTGr',

        container: '#container', // Make sure that this "container" is the same as the id of the div container you referenced above.

        // Callback after submission request has been made

        // See Advanced -> Methods for breakdown of specific fields

        submission: (resp) => { console.log(resp) }

      })

    </script>

  </body>

</html>
`;
  }
}

// registering the web component
const elementName = 'hello-world';
customElements.define(elementName, HelloWorld);
