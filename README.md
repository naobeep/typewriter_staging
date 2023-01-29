# typewriter_staging

タイプライター風にタイトルを表示するプラグインです。
効果音は[オトロジック](https://otologic.jp/)（CC BY 4.0）様作成の[ライプライター01](https://otologic.jp/sounds/se/mp3-zip/Typewriter01-mp3.zip)を加工して使用しています。

## install

`</body>`の直前で`typewriter.js`を読み込んでください。

``` html
<script src="./scripts/typewriter.js"></script>
```

## usage

ページを開くと16:9の黒いスクリーンが出現し、h1タグに含まれるテキストを1文字ずつ表示します。
最後の文字が表示されたあと、全文を表示し、一定時間経過後にスクリーンごと消去されます。

- 演出中に画面をクリックすると効果音が出ます。音量にご注意ください。
- h1タグにテキストが存在しないときはページタイトルで代替します。
- h1タグ内のテキストを`<span>`で区切ることで、文節内での改行を防ぐことができます。
- `typewriter.js`を読み込むより先にscriptタグ、あるいはJavaScriptファイルで`userSettings`オブジェクトを作成すると、打鍵間隔、全文表示までの待機時間をカスタマイズできます。
  - delay: `<number>`打鍵間隔
  - wait: `<number>`全文表示までの待機時間
  - stand: `<number>`スクリーン削除までの待機時間
  - alternativeCode: `<string>`隠し機能。タイプライター演出で表示する文字を差し替えます。
