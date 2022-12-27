// my-great-beautiful-buttonの定義
// カスタム要素の振る舞いはクラス構文で実装する
class MyGreatBeautifulButton extends HTMLElement {
    constructor() {
        super();

        // カスタム要素に空のシャドウDOMを紐づける
        this.attachShadow({ mode: "open" });
        
        // HTML側で指定されたbackgroundColor属性やcolor属性の値を参照する
        const backgroundColorAttr = this.getAttribute('backgroundColor') || '#eee';
        const colorAttr = this.getAttribute('color') || '#000';
        console.log({ colorAttr, backgroundColorAttr });

        // シャドウDOMの文書構造を定義する
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    border: none;
                    border-radius: 8px;
                    padding: 10px 20px;
                    background-color: ${backgroundColorAttr};
                    color: ${colorAttr}
                }
            </style>

            <button type="submit">
                <!-- 利用側のパラメータを差し込む -->
                <slot name="label" />
            </button>
        `;
    }
}

// カスタムコンポーネントの登録
customElements.define("my-great-beautiful-button", MyGreatBeautifulButton);
