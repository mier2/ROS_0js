#include <ros/ros.h>
#include <std_msgs/String.h>
#include <res_msgs/ResDimension.h>


int main(int argc, char  *argv[])
{
    ros::init(argc, argv, "p_node");
    printf("hello from p_node\n");
    
    ros::NodeHandle nh;
    ros::Publisher pub = nh.advertise<res_msgs::ResDimension>("topic_1",10);

    ros::Rate loop_rate(10);

    while(ros::ok()){
        printf("operating p_node\n");
        res_msgs::ResDimension msg;
        msg.file_name = "confetti.jpg";
        // valence is index0, emotion is index 1 in vector vm
        msg.vm.push_back(10);
        msg.vm.push_back(2);
        msg.res_time = ros::Time::now().toSec();
        pub.publish(msg);
        loop_rate.sleep();
    }
    return 0;
}
