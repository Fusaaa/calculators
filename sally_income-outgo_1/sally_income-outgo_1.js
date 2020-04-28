
    function RES() {
      var spot = parseInt(document.getElementById("spot_cruising").value);
      var dr = parseInt(document.getElementById("drum").value);
      var da = parseInt(document.getElementById("daihatsu").value);
      var ogf = parseInt(document.getElementById("outgo_f").value);
      var oga = parseInt(document.getElementById("outgo_a").value);
      var sg = parseInt(document.getElementById("sally1").value);
      var st1 = parseInt(document.getElementById("sally2-1").value);
      var st2 = parseInt(document.getElementById("sally2-2").value);

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

    //一周回にかかる時間(後々選択性にしたい)
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

    //
    var sally = 0;
      if ( sg !== 0 ) {
        sally = sg;
      } else if ( sg == 0 ) {
        sally = Math.ceil((st1 *60 +st2)/ bt);
      } else {
        sally = 0;
      }

    //収支(燃料・弾薬)
    var f = 0; var a = 0; var s = 0; var b = 0;
      f = (ic1 -ogf) *sally;
      a = (ic2 -oga) *sally;
      s = ic3 *sally;
      b = ic4 *sally;
    document.getElementById("ic-og_f").value = f;
    document.getElementById("ic-og_a").value = a;
    document.getElementById("ic-og_s").value = s;
    document.getElementById("ic-og_b").value = b;

    }
