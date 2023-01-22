"use strict"

//a Ros object that we can use to communicate with other nodes
var ros = new ROSLIB.Ros({
    url : 'ws://localhost:9090'
  });

  ros.on('connection', function() {
    document.getElementById("status").innerHTML = "Connected";
  });

  ros.on('error', function(error) {
    document.getElementById("status").innerHTML = "Error";
  });

  ros.on('close', function() {
    document.getElementById("status").innerHTML = "Closed";
  });

  var txt_listener = new ROSLIB.Topic({
    ros : ros,
    name : 'topic_1',
    messageType : 'res_msgs/ResDimension'
  });

  txt_listener.subscribe(function(m) {
    document.getElementById("msg").innerHTML = m.file_name;
    document.getElementById("v").innerHTML = m.vm[0];
    document.getElementById("m").innerHTML = m.vm[1];
    console.log(m.res_time);
    document.getElementById("t").innerHTML = m.res_time;
  });


  cmd_vel_listener = new ROSLIB.Topic({
    ros : ros,
    name : "/cmd_vel",
    messageType : 'std_msgs/String'
  });

  move = function () {
    var twist = new ROSLIB.Message({data : data.replace("ok", "")});
    cmd_vel_listener.publish(twist);
  }



  var j_listener = new ROSLIB.Topic({
    ros : ros,
    name : 'topic_2',
    messageType : 'res_msgs/ResDimension'
  });

  j_listener.subscribe(function(m) {
    document.getElementById("msg1").innerHTML = m.file_name;
    document.getElementById("v1").innerHTML = m.vm[0];
    document.getElementById("m1").innerHTML = m.vm[1];
    console.log(m.res_time);
    document.getElementById("t1").innerHTML = m.res_time;
  });