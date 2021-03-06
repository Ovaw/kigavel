<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>日程を選ぶ</title>
</head>
<body>
    <h1 id="logo">TripPlanner</h1>

    <h2>日程を選ぶ</h2>
    <a href="index.php">戻る</a>

    <div>
        <form action="location.php" method = "post">
            出発日
            <input type="date" name="departure" id="departure">
            <br>
            帰着日
            <input type="date" name="return" id="return">
            <br>
            <input type="submit" value="次へ">
        </form>
    </div>

    <p>
        <a href="index.php">トップへ戻る</a>
    </p>
</body>
</html>