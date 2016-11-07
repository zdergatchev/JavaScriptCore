class Textbox{
    constructor(selector, regex){
        this.selector = selector;
        this._invalidSymbols = regex;
        this._value = '' ;
        this._elements = $(selector);

        let that = this;
        $(selector).on('input',function () {
            let value = $(this).val();
            $(that.selector).val(value);
            that.value = value;
        })
    }

    get elements(){
        return this._elements;
    }

    get value(){
        return $(this.selector).val();

    }
    set value(value){
        this._value = value;
        $(this.selector).val(value);

    }

    isValid(){
        let match = this._invalidSymbols.test($(this.selector).val());

        if(match){
            return false;
        }
        else{
            return true;
        }
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

console.log(inputs);

inputs.on('input',function(){console.log(textbox.value);});


