<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>目的地を選ぶ</title>
    <link rel="stylesheet" href="css/style.css" type="text/css">
</head>
<body>
    <h1 id="logo">TripPlanner</h1>

    <h2>目的地を選ぶ</h2>

    <a href="date.php">戻る</a>

    <div>
        検索
        <input type="text">

        <br>
        
        
        <div id = 'locations'>
            <!-- テスト時http-serverを使う，jsでlocation.csvから要素取得，表示 -->
            <script type="text/javascript" src="js/main.js"></script>
        </div>
    </div>

    <div id="items">
        選択中: 
    </div>

    <div>
        <a href="suggest.php">次へ</a>
    </div>

    <p>
        <a href="index.php">トップへ戻る</a> 
    </p>

    <script type="text/javascript" src="https:code.jquery.com/jquery-3.4.1.min.js"></script>
</body>
</html>