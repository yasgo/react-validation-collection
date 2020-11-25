# What is this?

Custom form validations for React.js projects.

# Installation

`npm i react-validation-collection --save`

# Usage

```
import { creditCardValidate } from 'react-validation-collection'

creditCardValidate('XXXX XXXX XXXX XXXX')
```

# Functions

<p>💳 Credit Card</p>

```
import { creditCardValidate } from 'react-validation-collection'

creditCardValidate('XXXX XXXX XXXX XXXX')
creditCardValidate('XXXX XXXX XXXX XXXX')
```

<p>📅 Date</p>


```
import { dateValidate } from 'react-validation-collection'

dateValidate('DD/MM/YYYY')
```


<p>✉️ Mail</p>


```
import { mailValidate } from 'react-validation-collection'

mailValidate('john@doe.com')
```


<p>💲 Special Character</p>


```
import { specialCharacterValidate } from 'react-validation-collection'

specialCharacterValidate('test$@')
```


<p>🆔 TC ID</p>


```
import { tcIDValidate } from 'react-validation-collection'

tcIDValidate('XXXXXXXXXXX')
```

<p>☎️ TR Phone</p>


```
import { trPhoneValidate } from 'react-validation-collection'

trPhoneValidate('+XX XXX XXX XX XX')
trPhoneValidate('XXX XXX XX XX')
trPhoneValidate('XXX XXX XX XX')
```

<p>🔗 URL</p>


```
import { urlValidate } from 'react-validation-collection'

urlValidate('www.google.com')
trPhoneValidate('http://www.google.com')
```

# License

<p>Licensed under the MIT License, Copyright © 2020-present Yasin Burak Kalkan.</p>
<p>See <a href="https://github.com/yasgo/react-validation-collection/blob/main/LICENSE" target="_blank">LICENSE</a> for more information.</p>
