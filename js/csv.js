// 参考 https://uxmilk.jp/11586

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
 
// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
    var result = []; // 最終的な二次元配列を入れるための配列
    var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
 
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length;++i){
        result[i] = tmp[i].split(',');
    }
 
    console.log(result);
    // alert(result[2][1]); // 300yen
    // document.write("<div>" + result[0][0] + "</div>")

    
    for(let i = 1; i < result.length; i++){
        //id属性で要素を取得
        var locations_element = document.getElementById('locations');

        // 新しいHTML要素を作成
        var new_element = document.createElement("div");
        new_element.textContent = result[i][0];

        // 指定した要素の中の末尾に挿入
        locations_element.appendChild(new_element);
    }
    
}
 
getCSV(); //最初に実行される