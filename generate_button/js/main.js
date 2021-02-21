{
    // 追加ボタンをinputタグで作り、bodyタグの子要素に入れる
    let key = 0;
    const addButton = document.createElement('input');
    addButton.classList.add('addition');
    addButton.type = 'button';
    addButton.value = '追加';
    document.body.appendChild(addButton);

    // 追加ボタンをクリックしたら、ナンバー付の削除ボタンをinputタグで作る関数
    function buttonAdd() {
        const addButtonClick = document.getElementsByClassName('addition')[0];
        addButtonClick.addEventListener('click', ()=> {
            const delButton = document.createElement('input');
            delButton.classList.add('deletion');
            delButton.type = 'button';
            delButton.value = `${key}：削除`;
            document.body.appendChild(delButton);
            key++;
            buttonDelete();
        }, false);
    }

    //クリックした削除ボタンを取る関数（実は非表示にするだけ）
    function buttonDelete() {
        for (let i = 0; i < key; i++) {
            const deleteButtonClick = document.getElementsByClassName('deletion')[i];
            deleteButtonClick.addEventListener('click', ()=> {
                deleteButtonClick.classList.add('hidden');
            }, false);
        }
    }

    buttonAdd()
}