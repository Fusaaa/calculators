
    // 経験値テーブル
  	// expt[1] - expt[0] = レベル1からレベル2になるための必要な経験値
  	var expt = [ 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900,2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4000, 4100, 4200, 4300, 4400, 4500, 4600, 4700, 4800, 4900, 5000, 5200, 5400, 5600, 5800, 6000, 6200, 6400, 6600, 6800, 7000, 7300, 7600, 7900, 8200, 8500, 8800, 9100, 9400, 9700, 10000, 10400, 10800, 11200, 11600, 12000, 12400, 12800, 13200, 13600, 14000, 14500, 15000, 15500, 16000, 16500, 17000, 17500, 18000, 18500, 19000, 20000, 22000, 25000, 30000, 40000, 60000, 90000, 148500, 0, 10000, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 12000, 14000, 16000, 18000, 20000, 23000, 26000, 29000, 32000, 35000, 39000, 43000, 47000, 51000, 55000, 59000, 63000, 67000, 71000, 75000, 80000, 85000, 90000, 95000, 100000, 105000, 110000, 115000, 120000, 127000, 134000, 141000, 148000, 155000, 163000, 171000, 179000, 187000, 195000, 204000, 213000, 222000, 231000, 240000, 250000, 60000, 80000, 110000, 150000, 200000, 260000, 330000, 410000, 500000, 100000, 113000, 139000, 178000, 230000, 295000, 373000, 457000, 561000, 684000];

    var pretime = [ 0,  1/4, 2/4, 3/4, 4/4, 5/4, 6/4];

  	// 現在レベルの変更 onchange
  	function Xchange() {
  	 var gx = parseInt(document.getElementById("xlv").value);
  	 var gy = parseInt(document.getElementById("ylv").value);
  	 if (gx >= gy) {
  		 document.getElementById("ylv").value = gx;
  	 }
  	}

  	// 目標レベルの変更 onchange
  	function Ychange() {
  	 var gx = parseInt(document.getElementById("xlv").value);
  	 var gy = parseInt(document.getElementById("ylv").value);
  	 if (gx >= gy) {
  		 document.getElementById("xlv").value = gy;
  	 }
  	}

    // 次LVまでの経験値 onchange
    function Nchange() {
     var gn = parseInt(document.getElementById("nl").value);
     }

    //MVP率の変更 onchange
    function Mchange() {
     var gm = parseInt(document.getElementById("mvp").value);
     }

    //大破撤退率の変更 onchange
    function Bchange() {
     var jtt = parseInt(document.getElementById("bang").value);
     }


  	//出撃準備時間 onchange
  	function Wchange() {
  	 var gw = parseInt(document.getElementById("pretime").value);
     }

    //海域選択による経験値変更 onchange
    function Schange() {
     var gs = parseInt(document.getElementById("spot").value);
    }

  	// 表示用 onClick
  	function DisplayFunc() {
  	 var gx = parseInt(document.getElementById("xlv").value);
  	 var gy = parseInt(document.getElementById("ylv").value);
     var gn = parseInt(document.getElementById("nl").value);
     var gm = parseInt(document.getElementById("mvp").value);
     var jtt = parseInt(document.getElementById("bang").value);
  	 var gw = parseInt(document.getElementById("pretime").value);
     var gs = parseInt(document.getElementById("spot").value);

     var gAdjoint = 1;
     if(document.calculator.adjoint.checked) gAdjoint = 0;

       //経験値(minimum)
       var basis_levspot_min = 0;
       if (gs==21) {
         basis_levspot_min = 150;
       } else if (gs==1) {
         basis_levspot_min = 160;
       } else if (gs==3) {
         basis_levspot_min = 140;
       } else if (gs==8) {
         basis_levspot_min = 190;
       } else if (gs==9) {
         basis_levspot_min = 200;
       } else {
         basis_levspot_min = 0;
       }

       //経験値(maximum)
       var basis_levspot_max = 0;
       if (gs==21) {
         basis_levspot_max = 200;
       } else if (gs==1) {
         basis_levspot_max = 180;
       } else if (gs==3) {
         basis_levspot_max = 160;
       } else if (gs==8) {
         basis_levspot_max = 230;
       } else if (gs==9) {
         basis_levspot_max = 250;
       } else {
         basis_levspot_max = 0;
       }

  		 // 1周回で得られる経験値(minimum) ＆ S勝利率の加味 & 経験値倍率
  		 var ret_getexp1 = 0;
         if (gs==2) { //3-2。大破撤退はイレギュラーなので2戦一括り
           ret_getexp1 = 310 *1.2 *(gm/100);
         } else if (gs==13) { // 3-4。C,Gの2ヶ所で撤退の危険があるので、minはCに合わせる。最「小」なので。
           ret_getexp1 = (160 *1.2 *(gm/100)) + (180 *1.2 *(gm/100) *((100-jtt)/100)) + (300 *1.2 *(gm/100) *((100-jtt)/100)) + (420 *1.2 *(gm/100) *((100-jtt)/100));
         } else if (gs==12) { // 4-4。A-E-I-K、A,I=370/E=160/K=440
           ret_getexp1 = ((370 *1.2 *(gm/100)) + (160 *1.0 *(gm/100))) + (440 *1.2 *(gm/100) *((100-jtt)/100));
         } else if (gs==4) { // 5-3-P A勝利
           ret_getexp1 = (200 *1.0 *(gm/100)) + (700 *1.0 *(gm/100) *((100-jtt)/100));
         } else if (gs==6) { // 6-2-B。420exp一定なので2戦=x2。1戦目での大破撤退はイレギュラーなので2戦一括り。
           ret_getexp1 = (420 *1.2 *(gm/100)) * 2;
         } else if (gs==7) { // 1-5。大破撤退はイレギュラーなので4戦一括り。
           ret_getexp1 = 300 *1.2 *(gm/100);
         } else if (gs==10) { // 7-1。D-G-H-K、D=150/G=150/H,K=480
           ret_getexp1 = ((150 *1.2 *(gm/100)) + (150 *1.0 *(gm/100))) + (480 *1.2 *(gm/100) *((100-jtt)/100));
         } else if (gs==11) { // 7-2-1。大破撤退はイレギュラーなので3戦一括り。
           ret_getexp1 = 530 *1.2 *(gm/100);
         } else if (gs==0) {
           ret_getexp1 = 0;
         } else { //1戦撤退すべて
           ret_getexp1 = basis_levspot_min *1.2 *(gm/100);
         }

         if (gAdjoint==0) ret_getexp1 = ret_getexp1 * 1.5;

  		 // 1周回で得られる経験値(maximum)
       var ret_getexp2 = 0;
         if (gs==2) { //3-2。大破撤退はイレギュラーなので2戦一括り
           ret_getexp2 = 370 *1.2 *(gm/100);
         } else if (gs==13) { // 3-4。C,Gの2ヶ所で撤退の危険があるので、maxはGに合わせる。最「大」なので。
           ret_getexp2 = (190 *1.2 *(gm/100)) + ((220 *1.2 *(gm/100))) + (320 *1.2 *(gm/100) *((100-jtt)/100)) + (440 *1.2 *(gm/100) *((100-jtt)/100));
         } else if (gs==12) { // 4-4。A-E-I-K、A,I=370/E=160/K=440
           ret_getexp2 = ((430 *1.2 *(gm/100)) + (200 *1.0 *(gm/100))) + (480 *1.2 *(gm/100) *((100-jtt)/100));
         } else if (gs==4) { // 5-3-P A勝利
           ret_getexp2 = (220 *1.0 *(gm/100)) + (750 *1.0 *(gm/100) *((100-jtt)/100));
         } else if (gs==6) { // 6-2-B。420exp一定なので2戦=x2。1戦目での大破撤退はイレギュラーなので2戦一括り。
           ret_getexp2 = (420 *1.2 *(gm/100)) * 2;
         } else if (gs==7) { // 1-5。大破撤退はイレギュラーなので4戦一括り。
           ret_getexp2 = 535 *1.2 *(gm/100);
         } else if (gs==10) { // 7-1。D-G-H-K、D=150/G=150/H,K=480
           ret_getexp2 = ((200 *1.2 *(gm/100)) + (190 *1.0 *(gm/100))) + (590 *1.2 *(gm/100) *((100-jtt)/100));
         } else if (gs==11) { // 7-2-1。大破撤退はイレギュラーなので3戦一括り。
           ret_getexp2 = 670 *1.2 *(gm/100);
         } else if (gs==0) {
           ret_getexp2 = 0;
         } else { //1戦撤退すべて
           ret_getexp2 = basis_levspot_max *1.2 *(gm/100);
         }

         if (gAdjoint==0) ret_getexp2 = ret_getexp2 * 1.5;

       // 1周回で得られる経験値(33%=3,66%=4)
       var ret_getexp3 = 0;
        ret_getexp3 = ret_getexp1 +((ret_getexp2 - ret_getexp1)* 1/3);
       var ret_getexp4 = 0;
        ret_getexp4 = ret_getexp1 +((ret_getexp2 - ret_getexp1)* 2/3);

         //出力部
         ret_getexp1 = Math.ceil(ret_getexp1);
          document.getElementById("ret_getexpmin").value = ret_getexp1;
         ret_getexp2 = Math.ceil(ret_getexp2);
          document.getElementById("ret_getexpmax").value = ret_getexp2;
         ret_getexp3 = Math.ceil(ret_getexp3);
          document.getElementById("ret_getexp_t1").value = ret_getexp3;
         ret_getexp4 = Math.ceil(ret_getexp4);
          document.getElementById("ret_getexp_t2").value = ret_getexp4;

  		 //出撃準備時間(分)
  		 var ret_pretime = 0;
  		 m = 0;
  		   {
  				 ret_pretime = ret_pretime + pretime[gw + m];
  			 }

  		 //目標lvまでに必要な経験値量
  		 // 必要経験値
  			var ret_needexp = 0;

  			if (gx >= gy) {
  			  ret_needexp = 0;
        } else if (gn==0) {
          for (i = 0; i < gy - gx; i++) {
            ret_needexp = ret_needexp + expt[gx + i];
          }
        } else {
          for (i = 1; i < gy - gx; i++) {
            ret_needexp = ret_needexp + expt[gx + i];
          }
        }
        if(gn!==0) ret_needexp = ret_needexp + gn;
  	 document.getElementById("ret_needexp").value = ret_needexp;

       //lv1~現在lvまでの経験値量
        var fotn = 0; //from lv1 to now
        j = 0;

        if(gx < 1) {
          fotn = 0;
        } else {
          for (j = 0; j < gx; j++) {
            fotn = fotn + expt[j];
         }
        }

       //lv1~目標lvまでの経験値量
        var fota = 0; //from lv1 to aim
        k = 0;

        if(gy < 1) {
          fota = 0;
        } else {
          for (k = 0; k < gy; k++) {
            fota = fota + expt[k];
         }
        }

       //進捗率=lv1~現在lvまでの経験値量/lv1~目標lvまでの経験値量(*100)
        var prog = 0;
          prog = Math.round((fotn/fota)* 10000)/100; //小数第二位で四捨五入
          if (prog < 0) prog = 0;
        document.getElementById("progress").value = prog;

  	//必要周回数(minimum)
  	var ret_needsally1 = 0;
  	if ( gx>=gy || gs==0 ) {
  		ret_needsally1 = 0;
    } else {
  		ret_needsally1 = Math.ceil(ret_needexp / ret_getexp2);
  	}
  	//必要周回数(maximum)
  	var ret_needsally2 = 0;
  	if ( gx>=gy || gs==0 ) {
  		ret_needsally2 = 0;
    } else {
  		ret_needsally2 = Math.ceil(ret_needexp / ret_getexp1);
  	}

    //必要周回数(33%=3,66%=4)
    var ret_needsally3 = 0;
     ret_needsally3 = ret_needsally1 +((ret_needsally2 - ret_needsally1)* 1/3);
     ret_needsally3 = Math.ceil(ret_needsally3);
    var ret_needsally4 = 0;
     ret_needsally4 = ret_needsally1 +((ret_needsally2 - ret_needsally1)* 2/3);
     ret_needsally4 = Math.ceil(ret_needsally4);

      //出力部
      document.getElementById("ret_needsallymin").value = ret_needsally1;
      document.getElementById("ret_needsallymax").value = ret_needsally2;
      document.getElementById("ret_needsally_t1").value = ret_needsally3;
      document.getElementById("ret_needsally_t2").value = ret_needsally4;

  	//実測結果：後々、海域毎変動性or利用者選択性に変更したいところだが…。
     //戦闘時間(battle_time)の海域毎・ルート毎変動
     var bt = 0;
     if (gs==21) {
       bt = 4/3;
     } else if (gs==1) {
       bt = 3/5;
     } else if (gs==2) {
       bt = 4;
     } else if (gs==3) {
       bt = 5/6;
     } else if (gs==6) {
       bt = 2;
     } else if (gs==7) {
       bt = 4;
     } else if (gs==8) {
       bt = 3/2;
     } else if (gs==9) {
       bt = 5/4;
     } else if (gs==11) {
       bt = 4;
     } else {
       bt = 0;
     }
     //大破撤退率適用の場合、btの設定はスルー、直接代入する。

  		//所要時間目安(分)(minimum)
  		var ret_timemin = 0;
      if (gs==12) {
        ret_timemin = Math.ceil((10/3 *(ret_needsally1 *(jtt/100))) + (65/12 *(ret_needsally1 *((100-jtt)/100))) + ((ret_needsally1 -1) *gw));
      } else if (gs==13) { // 3-4。最小なのでC撤退とする
        ret_timemin = Math.ceil((9/2 *(ret_needsally1 *(jtt/100))) + (25/4 *(ret_needsally1 *((100-jtt)/100))) + ((ret_needsally1 -1) *gw));
      } else if (gs==4) {
        ret_timemin = Math.ceil((5/3 *(ret_needsally1 *(jtt/100))) + (7/2 *(ret_needsally1 *((100-jtt)/100))) + ((ret_needsally1 -1) *gw));
      } else if (gs==10) {
        ret_timemin = Math.ceil((5/2 *(ret_needsally1 *(jtt/100))) + (17/4 *(ret_needsally1 *((100-jtt)/100))) + ((ret_needsally1 -1) *gw));
      } else {
  		  ret_timemin = Math.ceil(bt * ret_needsally1 +((ret_needsally1 - 1)* gw));
      }

  		document.getElementById("ret_timemin").value = ret_timemin; //時間いれるところから！

  		//所要時間目安(分)(maximum)
      var ret_timemax = 0;
      if (gs==12) {
        ret_timemax = Math.ceil((10/3 *(ret_needsally2 *(jtt/100))) + (65/12 *(ret_needsally2 *((100-jtt)/100))) + ((ret_needsally2 -1) *gw));
      } else if (gs==13) { // 3-4。最大なのでG撤退とする
        ret_timemax = Math.ceil((13/3 *(ret_needsally2 *(jtt/100))) + (25/4 *(ret_needsally2 *((100-jtt)/100))) + ((ret_needsally2 -1) *gw));
      } else if (gs==4) {
        ret_timemax = Math.ceil((5/3 *(ret_needsally2 *(jtt/100))) + (7/2 *(ret_needsally2 *((100-jtt)/100))) + ((ret_needsally2 -1) *gw));
      } else if (gs==10) {
        ret_timemax = Math.ceil((5/2 *(ret_needsally2 *(jtt/100))) + (17/4 *(ret_needsally2 *((100-jtt)/100))) + ((ret_needsally2 -1) *gw));
      } else {
  		  ret_timemax = Math.ceil(bt * ret_needsally2 +((ret_needsally2 - 1)* gw));
      }

  		document.getElementById("ret_timemax").value = ret_timemax;
     }
