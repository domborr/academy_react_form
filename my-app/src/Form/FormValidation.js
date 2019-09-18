export default class FormValidation{
   validateString(string) {
        console.log(string);
        var validity = true;
  
        if( string == '' ) { validity = false; }
        
        if (string == 'sample'){ validity = false; }
        
        if( string.match( /[ |<|,|>|\.|\?|\/|:|;|"|'|{|\[|}|\]|\||\\|~|`|!|@|#|\$|%|\^|&|\*|\(|\)|_|\-|\+|=]+/ ) != null ) {
  
            validity = false;
        }
        return validity;
      }
}