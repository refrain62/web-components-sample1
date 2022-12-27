class MyGreatBeautifulButtonWithTemplate extends HTMLElement {
    constructor() {
        super();

        // HTMLテンプレートを呼び出す
        const template = document.getElementById('my-great-beautiful-button');

        // テンプレート内の構造をコピーする（操作しても元のテンプレートを壊さないようにする）
        const templateContent = template.content.cloneNode( true );

        // attachした戻り値でシャドウDOMのルート要素を取得
        const shadowRoot = this.attachShadow({ mode: "open" });

        // テンプレートをシャドウDOMのツリーに追加する
        shadowRoot.appendChild( templateContent );
    }
}

customElements.define(
    "my-great-beautiful-button-with-template",
    MyGreatBeautifulButtonWithTemplate
);
