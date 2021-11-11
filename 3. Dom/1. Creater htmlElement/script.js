// Задание 1. Реализовать класс, описывающий html элемент. 
// Класс HtmlElement должен содержать внутри себя: 
// + название тега; 
// + самозакрывающийся тег или нет; 
// + текстовое содержимое; 
// + массив атрибутов; 
// + массив стилей; 
// + массив вложенных таких же тегов; 
// + метод для установки атрибута; 
// + метод для установки стиля; 
// + метод для добавления вложенного элемента в конец текущего элемента; 
// + метод для добавления вложенного элемента в начало текущего элемента; 
// + метод getHtml(), который возвращает html код в виде строки, включая html код вложенных элементов. 
// С помощью написанного класса реализовать следующий блок и добавить его на страницу с помощью document.write().




class HtmlElement {
    element = "";
    styles = [];
    addtribute = [];
    childred = [];
    startHtml = [];
    endHtml = [];

    constructor(tagName, isPair, isClose, content = "") {
        this.tagName = tagName;
        this.isClose = isClose;
        this.isPair = isPair;
        this.content = content;
    }

    addChildrean(HtmlElement) {
        this.content += " " + HtmlElement.GetHtml() + " ";
    }

    ClearStyle() {
        this.styles = [];
    }

    AddStyles(styleName, styleValue) {
        this.styles.push(styleName + ": " + styleValue + ";");
    }


    ClearAtributes() {
        this.addtribute = [];
    }

    AddSingleAtribute(adtribute) {
        this.addtribute.push(adtribute);
    }

    AddTwiceAtribute(atributeName, atributeValue) {
        this.addtribute.push(atributeName + '="' + atributeValue + '" ');
    }



    ChangeContent(content) {
        this.content = content;
    }

    AddContent(content) {
        this.content += ' ' + content;
    }

    GeneretaionAtributes() {
        let str = '';
        this.addtribute.forEach(element => {
            str += element;
        });
        return str;
    }


    GeneretaionStyles() {
        if (this.styles.length > 0) {
            let str = 'style="';
            this.styles.forEach(element => {
                str += element;
            });
            str += '"';
            return str;
        }
        return '';
    }


    ConfigTag() {
        let style = this.GeneretaionStyles();
        let atribute = this.GeneretaionAtributes();
        console.log(style);

        if (this.isPair) {
            this.element = '<' + this.tagName + ` ${atribute} ${style} >` + this.content + '</' + this.tagName + '>';
        } else {
            if (this.isClose) {
                this.element = '<' + this.tagName + ` ${atribute} ${style} \>`;
            } else {

                this.element = '<' + this.tagName + ` ${atribute} ${style} >`;
            }
        }

        if (this.startHtml.length > 0) {
            for (let i = 0; i < this.startHtml.length; i++) {
                let element = this.startHtml[i];
                this.element = element.GetHtml() + " " + this.element;
            }
        }
        if (this.endHtml.length > 0) {
            for (let i = 0; i < this.endHtml.length; i++) {
                let element = this.endHtml[i];
                this.element += this.endHtml[i].GetHtml();
            }
        }
    }

    AddElementStart(HtmlElement) {
        this.startHtml.push(HtmlElement);
    }
    RemoveElementStart(startIndex, countItem) {
        this.startHtml.splice(startIndex, countItem)
    }

    AddElementEnd(HtmlElement) {
        this.endHtml.push(HtmlElement);
    }


    RemoveElementStart(startIndex, countItem) {
        this.endHtml.splice(startIndex, countItem)
    }

    GetHtml() {
        this.ConfigTag();
        return this.element;
    }
}



let firstDiv = new HtmlElement("div", true, true);
firstDiv.AddStyles('display', 'flex');
firstDiv.AddTwiceAtribute('id', 'wrapper');


let secondDiv = new HtmlElement("div", true, true);
secondDiv.AddStyles('width', '300px');
secondDiv.AddStyles('margin', '10px');


let firstH3 = new HtmlElement("h3", true, true, 'What is lorem Ipsum?');
let firstImg = new HtmlElement("img", false, false, 'What is lorem Ipsum?');
firstImg.AddStyles('width', '100%');
firstImg.AddTwiceAtribute('src', 'lipsum.jpg');
firstImg.AddTwiceAtribute('alt', 'Lorem Ipsum');

let firstP = new HtmlElement("p", true, true, "Lorem ipsum dolor sit ametectetur adipisicing elit. Cum, et. Atque id dolores nam. Atque fugit a blanditiis offic consiis!  Atque fugit a blanditiis offic consiis!  Atque fugit a blanditiis offic consiis!  Atque fugit a blanditiis offic consiis! Consectetur.");
firstP.AddStyles("text-align", "justify");

let firstA = new HtmlElement("a", true, true, "More . . . ");
firstA.AddTwiceAtribute('href', 'https://www.lipsum.com/');
firstA.AddTwiceAtribute('target', '_blank');


firstH3.AddElementEnd(firstImg);
firstP.addChildrean(firstA);
firstH3.AddElementEnd(firstP);
secondDiv.addChildrean(firstH3);
firstDiv.addChildrean(secondDiv);
firstDiv.addChildrean(secondDiv);


document.write(firstDiv.GetHtml())