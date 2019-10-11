#sparetime.js Beta

###### A dom manipulation library that spares your time.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them
```
node
```


### Installing
```
npm install sparetime.js --save
```


### Up and running
```
 window.onload = () => {
          spare();
        }

```

### Examples
* Create, add attributes, add Classes, add Html, get element 
```  
 let m = Spare.create('li').attr('id', 'working').Class('i','work', 'here').html(" Spare.js Rocks").element;
```

```
 Spare.sel('#but').html(`<span> This us cool huh? </span>`);

```

* Select and append

```
  Spare.sel('#todo-list').append(m);
```

```
 Spare.addEvent('#but', 'click',() => {
            return  Math.floor(Math.random() * 1000)
          });

```




## Built With

* Typescript
* javascript
* Webpack




## Versioning

We use [Npm](http://npm.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ispirett/spare.js/tags). 

## Authors

* **Isaac Browne** - *Initial work* - [Ispirett](https://github.com/isprett)



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to typescript


