var app = getApp();
Page({
  data:{
    userInfo:{},
    messages:[
      {
        content:'中山——长沙，17.5\n中山——杭州，17.5\n江门——杭州，17.5\n佛山——长沙，17.5\n广州一苏州无锡17.5\n广州一廊坊17.5\n佛山——上海17.5\n深圳一西安17.5\n深tIll一虎门成都17.5\n廊坊——虎门17.5\n东莞——乌鲁木齐，17.5\n以上，17.5厢车中山——长沙，17.5\n中山——杭州，17.5\n江门——杭州，17.5\n佛山——长沙，17.5\n广州一苏州'
      },
      {
        content:'中山——长沙，17.5\n中山——杭州，17.5\n江门——杭州，17.5\n佛山——长沙，17.5\n广州一苏州无锡17.5\n广州一廊坊17.5\n佛山——上海17.5\n深圳一西安17.5\n深tIll一虎门成都17.5\n廊坊——虎门17.5\n东莞——乌鲁木齐，17.5\n以上，17.5厢车中山——长沙，17.5\n中山——杭州，17.5\n江门——杭州，17.5\n佛山——长沙，17.5\n广州一苏州'
      },
      {
        content:'中山——长沙，17.5\n中山——杭州，17.5\n江门——杭州，17.5\n佛山——长沙，17.5\n广州一苏州无锡17.5\n广州一廊坊17.5\n佛山——上海17.5\n深圳一西安17.5\n深tIll一虎门成都17.5\n廊坊——虎门17.5\n东莞——乌鲁木齐，17.5\n以上，17.5厢车中山——长沙，17.5\n中山——杭州，17.5\n江门——杭州，17.5\n佛山——长沙，17.5\n广州一苏州'
      },
      {
        content:'中山——长沙，17.5\n中山——杭州，17.5\n江门——杭州，17.5\n佛山——长沙，17.5\n广州一苏州无锡17.5\n广州一廊坊17.5\n佛山——上海17.5\n深圳一西安17.5\n深tIll一虎门成都17.5\n廊坊——虎门17.5\n东莞——乌鲁木齐，17.5\n以上，17.5厢车中山——长沙，17.5\n中山——杭州，17.5\n江门——杭州，17.5\n佛山——长沙，17.5\n广州一苏州'
      },
      {
        content:'中山——长沙，17.5\n中山——杭州，17.5\n江门——杭州，17.5\n佛山——长沙，17.5\n广州一苏州无锡17.5\n广州一廊坊17.5\n佛山——上海17.5\n深圳一西安17.5\n深tIll一虎门成都17.5\n廊坊——虎门17.5\n东莞——乌鲁木齐，17.5\n以上，17.5厢车中山——长沙，17.5\n中山——杭州，17.5\n江门——杭州，17.5\n佛山——长沙，17.5\n广州一苏州'
      },
      {
        content:'中山——长沙，17.5\n中山——杭州，17.5\n江门——杭州，17.5\n佛山——长沙，17.5\n广州一苏州无锡17.5\n广州一廊坊17.5\n佛山——上海17.5\n深圳一西安17.5\n深tIll一虎门成都17.5\n廊坊——虎门17.5\n东莞——乌鲁木齐，17.5\n以上，17.5厢车中山——长沙，17.5\n中山——杭州，17.5\n江门——杭州，17.5\n佛山——长沙，17.5\n广州一苏州'
      }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})