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
        this.content += ' ' + content.GetHtml;
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

        if (this.startHtml != null && this.startHtml.length > 0) {
            for (let i = 0; i < this.startHtml.length; i++) {
                this.element = this.startHtml[i] + " " + this.element;
            }
        }
        if (this.endHtml != null && this.endHtml.length > 0) {
            for (let i = 0; i < this.endHtml.length; i++) {
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




// Задание 2. Реализовать класс, который описывает css класс. 
// Класс CssClass должен содержать внутри себя: - название css класса; 
// + массив стилей; 
// + метод для установки стиля; 
// + метод для удаления стиля; 
// + метод getCss(), который возвращает css код в виде строки.


class CssClass {
    arrStyles = [];
    constructor(cssName, arrStyles = []) {
        this.cssName = cssName;
        this.arrStyles = arrStyles;
    }


    ClearStyle() {
        this.arrStyles = [];
    }

    AddStyles(styleName, styleValue) {
        this.arrStyles.push(styleName + ": " + styleValue + ";");
    }

    RemoveStyles(startIndex, endIndex) {
        this.arrStyles.splice(startIndex, endIndex);
    }

    GeneretaionStyles() {
        if (this.arrStyles != null && this.arrStyles.length > 0) {
            let str = '';
            this.arrStyles.forEach(element => {
                str += element + '\n';
            });
            return str;
        }
        return '';
    }

    getCss() {
        return `${this.cssName} {\n` + this.GeneretaionStyles() + '}\n';
    }

}


// Задание 3. Реализовать класс, описывающий блок html документ. 
// Класс HtmlBlock должен содержать внутри себя: 
// - коллекцию стилей, описанных с помощью класса CssClass; 
// - корневой элемент, описанный с помощью класса HtmlElement; 
// - метод getCode(), который возвращает строку с html кодом (сначала теги style с описанием всех классов, а потом все html содержимое из корневого тега и его вложенных элементов). 
// С помощью написанных классов реализовать следующий блок и добавить его на страницу с помощью document.write().




class HtmlBlock {
    htmlElementRoot;
    cssClassArr = [];
    constructor(htmlElement) {
        this.htmlElementRoot = htmlElement;
    }


    addCssElement(cssClass) {
        this.cssClassArr.push(cssClass);
    }

    setRoothHtmlElement(htmlElement) {
        this.htmlElementRoot = htmlElement;
    }



    GeneretaionStyles() {
        if (this.cssClassArr != null && this.cssClassArr.length > 0) {
            let str = '';
            for (let i = 0; i < this.cssClassArr.length; i++) {
                str += '\n' + this.cssClassArr[i].getCss();
            }
            return str;
        }
        return '';
    }

    getCode() {
        let str = this.GeneretaionStyles();
        let style = new HtmlElement("style", true, true, str);
        this.htmlElementRoot.AddElementStart(style.GetHtml());
        return this.htmlElementRoot.GetHtml();
    }
}





let firstDiv = new HtmlElement("div", true, true);
firstDiv.AddTwiceAtribute('id', 'wrapper');
firstDiv.AddTwiceAtribute('class', 'wrap');


let secondDiv = new HtmlElement("div", true, true);
secondDiv.AddTwiceAtribute('class', 'block');


let firstH3 = new HtmlElement("h3", true, true, 'What is lorem Ipsum?');
let firstImg = new HtmlElement("img", false, false, 'What is lorem Ipsum?');
firstImg.AddTwiceAtribute('class', 'img');
firstImg.AddTwiceAtribute('src', 'lipsum.jpg');
firstImg.AddTwiceAtribute('alt', 'Lorem Ipsum');

let firstP = new HtmlElement("p", true, true, "Lorem ipsum dolor sit ametectetur adipisicing elit. Cum, et. Atque id dolores nam. Atque fugit a blanditiis offic consiis!  Atque fugit a blanditiis offic consiis!  Atque fugit a blanditiis offic consiis!  Atque fugit a blanditiis offic consiis! Consectetur.");
firstP.AddTwiceAtribute("class", "text");

let firstA = new HtmlElement("a", true, true, "More . . . ");
firstA.AddTwiceAtribute('href', 'https://www.lipsum.com/');
firstA.AddTwiceAtribute('target', '_blank');


firstH3.AddElementEnd(firstImg);
firstP.addChildrean(firstA);
firstH3.AddElementEnd(firstP);
secondDiv.addChildrean(firstH3);
firstDiv.addChildrean(secondDiv);
firstDiv.addChildrean(secondDiv);


let wrap = new CssClass('.wrap');
wrap.AddStyles('display', 'flex');

let block = new CssClass('.block');
block.AddStyles('width', '300px');
block.AddStyles('margin', '10px');

let img = new CssClass('img');
img.AddStyles('width', '100%');

let text = new CssClass('.text');
text.AddStyles('text-align', 'justify');

let p = new CssClass('p');
p.AddStyles('color', 'red');

let cssArr = [wrap, block, img, text, p];


let htmlBlock = new HtmlBlock(firstDiv);
htmlBlock.addCssElement(block);
htmlBlock.addCssElement(img);
htmlBlock.addCssElement(text);
htmlBlock.addCssElement(p);
htmlBlock.addCssElement(wrap);




document.write(htmlBlock.getCode());