// csv参考 https://uxmilk.jp/11586
// ボタン参考 https://qiita.com/solarsoyo/items/677f1aa70ae2cd04014e

//CSVファイルを読み込む関数getCSV()の定義
function getCSV(){
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "locations.csv", true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行
	
    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
    req.onload = function(){ // 無名関数
	convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
    }
}

// delButton用カウンタ
let counter = 0;

// IDをbuttonlocからitemに変換する関数
/* buttonlocToItem(buttonloc){
    var  
} */

// ボタン追加関数
function addButton(id, value){ 
    var parent = document.getElementById(id);
    const addButton = document.createElement('input');
    addButton.classList.add('addition');
    addButton.type = 'button';
    addButton.value = value;
    addButton.id = "button" + id;
    parent.appendChild(addButton);
    addButton.addEventListener('click', (event)=> {
        var eventID = event.target.id;
        var itemID = 'item' + eventID.slice(9);
        document.getElementById(itemID).classList.remove('hidden');
    }, false);
}
 
// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
    var result = []; // 最終的な二次元配列を入れるための配列
    var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
 
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length;++i){
        result[i] = tmp[i].split(',');
    }
 
    console.log(result);

    
    for(let i = 1; i < result.length - 1; i++){
        //id属性で要素を取得
        var locations_element = document.getElementById('locations');

        // 新しいHTML要素を作成
        var new_element = document.createElement("div");
        new_element.id = 'loc' + result[i][0];
        new_element.textContent = result[i][1];

        // 指定した要素の中の末尾に挿入
        locations_element.appendChild(new_element);

        // 選択した情報のspanを作成，hiddenで隠しておく
        const chosenSpot = document.createElement('span');
        chosenSpot.id = 'item' + result[i][0];
        chosenSpot.textContent = new_element.textContent;
        chosenSpot.classList.add('hidden')
        document.getElementById('items').appendChild(chosenSpot);

        // 削除ボタン（追加と記述が変わっててダサい）
        const delButton = document.createElement('input');
        delButton.classList.add('deletion');
        delButton.type = 'button';
        delButton.id = 'del' + result[i][0];
        delButton.value = '削除';
        chosenSpot.appendChild(delButton);
        delButton.addEventListener('click', (event)=> {
            var eventID = event.target.id;
            var itemID = 'item' + eventID.slice(3);
            document.getElementById(itemID).classList.add('hidden');
        }, false);
        counter++;
        
        // 追加ボタン
        addButton(new_element.id, '追加');
    }
    
}

function locIDtoCounter(id){
    var counter
    for(let j = 3; j < id.length() - 1; j++) counter += id.charAt(i);
}


function SelectedLocation(){
    // 選択中項目に追加・削除(非表示)ボタンの作成
    addButton('items', '削除');

} 
 
getCSV(); //最初に実行される

// buttonAdd();