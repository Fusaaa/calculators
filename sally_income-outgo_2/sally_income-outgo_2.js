
    function RES() {
      var spot = parseInt(document.getElementById("spot_cruising").value);
      var dr = parseInt(document.getElementById("drum").value);
      var da = parseInt(document.getElementById("daihatsu").value);
      var ogf = parseInt(document.getElementById("outgo_f").value);
      var oga = parseInt(document.getElementById("outgo_a").value);
      var ns = parseInt(document.getElementById("need_source").value);
      var n1 = parseInt(document.getElementById("need").value);

    //一出撃で得る燃料ic1、弾薬ic2、鋼材ic3、ボーキic4
    var ic1 = 0;
      if (spot==1) {
        ic1 = 15 + 2 *dr + 3 *da;
      } else if (spot==4) {
        ic1 = 60 + 2 *dr + 3 *da;
      } else {
        ic1 = 0;
      }

    var ic2 = 0;
      if (spot==2) {
        ic2 = 100 + 2 *dr + 3 *da;
      } else {
        ic2 = 0;
      }

    var ic3 = 0;

    var ic4 = 0;
      if (spot==3) {
        ic4 = 15 + Math.ceil(1.5 *dr) + 2 *da;
      } else if (spot==4) {
        ic4 = 75 + Math.ceil(1.5 *dr) + 2 *da;
      } else {
        ic4 = 0;
      }

    //一出撃で失う燃料・弾薬 → ogf,oga
    //必要量 → nsに連動してn1

    //周回数
    var lap = 0;
      if ( ns == 1 ) {
        lap = Math.ceil(n1 /(ic1 -ogf));
      } else if ( ns == 2 ) {
        lap = Math.ceil(n1 /(ic2 -oga));
      } else if ( ns == 3 ) {
        lap = Math.ceil(n1 /ic3);
      } else if ( ns == 4 ) {
        lap = Math.ceil(n1 /ic4);
      } else {
        lap = 0;
      }
    document.getElementById("ic-og_lap").value = lap;

    //一周回にかかる時間(後々選択性にしないと周回編成により時間が違う問題が残ったままになる)
    var bt = 0;
      if (spot==1) {
        bt = 5/4;
      } else if (spot==2) {
        bt = 5/3;
      } else if (spot==3) {
        bt = 3/2;
      } else if (spot==4) {
        bt = 13/4;
      } else {
        bt = 0;
      }

    //周回時間(時間・分)
    var time_h = 0;
      time_h = Math.floor( Math.ceil(lap *bt) /60);
    var time_m = 0;
      time_m = Math.ceil(lap *bt) %60;
    document.getElementById("ic-og_time1").value = time_h;
    document.getElementById("ic-og_time2").value = time_m;

    }
