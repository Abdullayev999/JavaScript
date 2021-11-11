// Задание 2. Реализовать класс, который описывает css класс. 
// Класс CssClass должен содержать внутри себя: - название css класса; 
// + массив стилей; 
// + метод для установки стиля; 
// + метод для удаления стиля; 
// + метод getCss(), который возвращает css код в виде строки.


class CssClass {
    arrStyles = [];
    cssStyles = '';
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
        this.cssStyles = `${this.cssName} {\n` + this.GeneretaionStyles() + '}\n'
        return this.cssStyles;
    }

}


let css = new CssClass('.wrap');
css.AddStyles('display', 'flex');
css.AddStyles('width', '300px');

console.log(css.getCss());