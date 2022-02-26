"use strict";

// ▼moreボタンでさらに表示▼

// 例えば徳島市ブロックの中にあるmoreボタンは徳島市ブロックだけに反応してほしい
// 押されたボタンの兄弟要素を取得してfind →出ない。

// var show = 3; //初期表示件数
// var num = 3; //追加していく件数（仮）
// var contents = ".store_lists article";
// $(contents + ":nth-child(n + " + (show + 1) + ")").addClass("is-hidden");
// $(".more_btn").on("click", function () {
//     $(this)
//         .siblings(".store_lists") // btnの兄弟要素全て取得
//         .find(contents + ".is-hidden")
//         .slice(0, num)
//         .removeClass("is-hidden"); // num個切り出して表示
//     if (
//         $(this)
//             .siblings(".store_lists")
//             .find(contents + ".is-hidden").length == 0
//     ) {
//         $(this).fadeOut(); // is-hiddenついているものがなくなったらbtn消える
//     }
// });

// ▼moreボタンでさらに表示▼
// 出るには出てる（出てくる枚数がおかしい気はする）
// moreボタン押した時の判定がエリアの垣根を超えてしまう

let show = 3; //初期表示件数
let num = 3; //追加していく件数（仮）
let contents = ".store_lists article"; //.store_lists の子要素の article
$(contents + ":nth-child(n + " + (show + 1) + ")").addClass("is-hidden"); //store_lists articleの3+1つ目以降に.is-hiddenをつける
$(".more_btn").on("click", function () {
    //ここの.more_btnが上から何番目のボタンがclickされたを識別できれば他が動かなくできると思う
    $(contents + ".is-hidden")
        .slice(0, num)
        .removeClass("is-hidden"); //is-hiddenを削除
    if ($(contents + ".is-hidden").length == 0) {
        $(".more_btn").fadeOut(); // is-hiddenついているものがなくなったらbtn消える
    }
});
