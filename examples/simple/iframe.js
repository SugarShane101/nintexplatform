import { css, html, LitElement, styleMap } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class SampleIframe extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css` /* Add custom CSS. See https://help.nintex.com/en-US/formplugins/Reference/Style.htm */
    :host {
      height: 100%;
      width: 100%;
      display: block;
    }

    .frame {
      display: inline-block;
      height: 100%;
      width: 100%;
      background-color: transparent;
      border: none;
    }
  `;

  static getMetaConfig() {
    // plugin contract information
    return {
      controlName: 'IFrame-new',
      fallbackDisableSubmit: false,
      description: 'IFrame component which can render url view with the frame',
      iconUrl: 'one-line-text',
      groupName: 'Visual',
      version: '1.3',
      properties: {
        // Custom configuration fields. See https://help.nintex.com/en-US/formplugins/Reference/CustomField.htm
        src: {
          type: 'string',
          title: 'Source URL',
          description: 'URL of the iframe, please note many sites block been rendered in iframes',
        },
        height: {
          type: 'string',
          title: 'Height',
          description: 'Height of the component',
        },
      },
      standardProperties: {
        readOnly: true, // Add a read-only mode. See https://help.nintex.com/en-US/formplugins/Reference/ReadOnly.htm
        required: true,
        description: true,
      },
    };
  }

  static properties = {
    name: 'Hello',
    title: 'Hello',
    src: 'https://www.wikipedia.org/',
    height: '100%',
  };

  // Render the UI as a function of component state
  render() {
    let styles = { height: this.height };

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
      </script>
      <iframe
        class="frame"
        style=${styleMap(styles)}
        name=${this.name}
        allow="geolocation *; microphone; camera"
        title=${this.title}
        src=${this.src}
      ></iframe>
    `;
  }
}

// Registering the web component.
const elementName = 'sample-iframe';
customElements.define(elementName, SampleIframe);
