function spare () {
   (function (window) {
        function defineSpare() {
            //console.log('Touch framework is running')
            let Spare = {};

            //@ts-ignore
            Spare.info = function () {
                console.log('Touch framework is running')
            };
            //@ts-ignore
            Spare.addEvent = (selector: string, eventName: string, exec) => {
                const element = document.querySelector(selector);
                element.addEventListener(eventName, () => {
                    console.log(exec());
                    exec()
                })

            };
            //@ts-ignore
            Spare.create = (tagName: string) => {
                 let Element: Ele = new Ele()
;                return Element.create(tagName)
            };
            //@ts-ignore
            Spare.sel = (selector: string)=>{
                let element: Ele = new Ele();
                return element.sel(selector)
            };


            return Spare
        }

        if (typeof Spare === "undefined") {
            window.Spare = defineSpare()
        }
        // defineTouch()

    })(window);   //hello
};
// @ts-ignore
interface Ele {
    create(tagName: string)
    copy()
    sel(selector:string)
    methods: object
}

class Ele implements Ele{
   private _element:HTMLElement;
   private  _methods ;

    get element(){
       return this._element
    }
    set element(value){
       this._element = value
    }

    private methodList (){
        let methods =
            this._methods =
            {Class:this.Class
            ,attr:this.attr,
            html:this.html,
            element:this.element,
            append: this.append,
            };
        return { ...methods}
    }

     public  create(tagName:string) {
        this.element = document.createElement(tagName);
        return this.methodList()
     }

       public sel(selector:string){
         this.element = document.querySelector(selector);
         return this.methodList()
       }

      public attr = (attr:string, value:string) => {
             this.element.setAttribute(attr, value);
             return this.methodList()
      };

      public Class = (...className: Array<string>) => {
             this.element.classList.add(...className);
             return this.methodList()
         };

      public html = (html) => {
             this.element.innerHTML = `${html}`;
             return this.methodList()
         };
      public append = (...children: Array<HTMLElement>) => {
             this.element.append(...children);
             return this.methodList();
      };

      // prototype
     static copy(): Ele{
         return new Ele()
     }
}



