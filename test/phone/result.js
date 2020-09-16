$(function() {
    })
let amonk = {
    setTime: function() {
        var self = this;
        self.setday();
        self.hour();
        self.setmin();
        self.setsecond();
        setInterval(function() {
            self.setsecond();
        }, 1000);
    },
    //设置日期
    setday: function() {
        let myDate = new Date()
          , year = myDate.getFullYear()
          , month = myDate.getMonth() + 1
          , day = myDate.getDate();
        $('#ndate').text(+month + '月' + day + '日');
        myDate = null;
        year = null;
        month = null;
        day = null;
    },
    //设置小时
    hour: function() {
        let myDate = new Date()
          , hour = myDate.getHours();
        $('#hour').text(hour);
        if (hour == '23' || hour == '0' || hour == '00') {
            amonk.setday();
        }
        myDate = null;
        hour = null;
    },
    //设置分钟
    setmin: function() {
        let myDate = new Date()
          , min = myDate.getMinutes();
        if (min == '59' || min == '0' || min == '00') {
            amonk.hour();
        }
        if ((+min) < 10) {
            min = '0' + min;
        }
        $('#min').text(min);
        myDate = null;
        min = null;
    },
    //设置秒钟
    setsecond: function() {
        let myDate = new Date()
          , second = myDate.getSeconds();
        if (second == '59' || second == '0' || second == '00') {
            amonk.setmin();
        }
        if ((+second) < 10) {
            second = '0' + second;
        }
        $('#second').text(!!second ? second : '00');
        myDate = null;
        second = null;
    }
};
amonk.setTime();
function watermark(obj) {
    var date = new Date()
      , inntext = date.getFullYear() + '-';
    if (((+date.getMonth()) + 1) < 10) {
        inntext += '0' + ((+date.getMonth()) + 1) + '-';
    } else {
        inntext += ((+date.getMonth()) + 1) + '-';
    }
    if ((+date.getDate()) < 10) {
        inntext += '0' + date.getDate() + ' ';
    } else {
        inntext += date.getDate() + ' ';
    }
    if ((+date.getHours()) < 10) {
        inntext += '0' + date.getHours() + ':';
    } else {
        inntext += date.getHours() + ':';
    }
    if ((+date.getMinutes()) < 10) {
        inntext += '0' + date.getMinutes() + ':';
    } else {
        inntext += date.getMinutes() + ':';
    }
    if ((+date.getSeconds()) < 10) {
        inntext += '0' + date.getSeconds();
    } else {
        inntext += date.getSeconds();
    }
    var wstr = ``;
    var line_height = 100 / obj.config.ocnum
      , lheight = ($(obj.ele).height()) * (line_height / 100);
    for (var i = 0; i < obj.config.ocnum; i++) {
        wstr += '<div class="wline clearfix" style="height:' + line_height + '%;line-height:' + lheight + 'px;">';
        for (var j = 0; j < obj.config.olnum; j++) {
            wstr += '<div class="wson vercen" style="width:' + 100 / obj.config.olnum + '%">' + inntext + '</div>';
        }
        wstr += '</div>';
    }
    $(obj.ele).append(wstr);
}
//调用水印函数
watermark({
    ele: '.water',
    text: '',
    config: {
        olnum: 2,
        ocnum: 5
    }
});
