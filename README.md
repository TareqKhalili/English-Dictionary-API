# English-Dictionary-API

### get words DEFINITIONS, EXAMPLES, PARTS OF SPEACH, and SYNONYMS using this API

### Check out this website to test the API:  https://english-dictionary-api.herokuapp.com/

# Code Example

```javascript
 fetch(`https://english-dictionary-api.herokuapp.com/${word}`)
.then(res => res.json())
.then(data => { 
    /* data is an array of objects, every obejct conatins definition, part of speach, example, etc. */
    
    for (element of data) {
       console.log(element.def)
       console.log(element.speech_part)
       console.log(element.synonyms)
    }
})
```
