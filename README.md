# onespace 

̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌̕̚ͅ͏͓͔͕͖͙͚͐͑͒͗͛ͣͤͥͦͧͨͩͪͫͬͭͮͯ͘͜͟͢͝͞͠͡
Encode and decode a string of (a subset of) ASCII as a single character using [combining diacritical marks](http://unicode.org/charts/PDF/U0300.pdf).  Credit for the original idea goes to [@aemkei](http://aem1k.com/).  Can be used in node or any modern browser.

### API
```sh
npm i onespace --save
```

```js
const fs = require('fs'),
    onespace = require('onespace');

eval(onespace.convert(fs.readFileSync('encodedfile.js', 'utf8')));
```
`onespace.convert` is both the encoder and decoder.
```js
onespace.convert(onespace.convert('a')) === 'a';
```

### CLI
```sh
npm i onespace -g
onespace <glob of files to convert> [<output folder>]
```
