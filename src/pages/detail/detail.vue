<template>
  <view class="reportCorruption">
    <view class="header">
        <match-media  :max-width="767" >
            <image class="header-icon_phone" src=""></image>
        </match-media>
        <match-media :min-width="768">
            <image class="header-icon_pc" src=""></image>
        </match-media>
    </view>
    <view class="main">
      <view class="headerTitle">
         集团—廉洁举报
      </view>
      <view class="notice">
          <match-media  :min-width="768" >
            <view class="notice_left">
              <image :src="imgSrc.pc_notice_icon" mode="" />
            </view>
          </match-media>
          <view class="notice_right">
            <view class="right_title">廉洁举报须知</view>
            <view class="right_content"> 集团向来对任何腐败行为坚持零容忍原则，坚决查处，严厉打击，维护合作伙伴和 集团的合法权益，保障企业持续健康发展。我们承诺对举报人和举报内容严格保密。同时请您认真填写举报信息，对于恶意诋毁举报者，我们将依法依规保留追究法律责任的权利。您也可以通过以下渠道进行直接举报。</view>
            <match-media  :min-width="768" >
              <view class="right_way">监察中心举报渠道</view>
            </match-media>
            <a-row :gutter="8">
              <a-col  :xl="12">

                <view class="right_address">微信举报：aaaaaaaaa</view>
              </a-col>
              <a-col  :xl="12">

                <view class="right_address">邮箱举报：aaaaaaaa@163.com</view>
              </a-col>
            </a-row>
            <a-row :gutter="8">
              <a-col  :xl="12">
                <view class="right_address">电话举报：11111111111/22222222222/3333333333</view>
              </a-col>
              <a-col  :xl="12">
                <view class="right_address">信访举报：地址地址地址地址地址地址地址地址地址地址地址</view>
              </a-col>
            </a-row>
          </view>
      </view>

      <view class="form_title">
        <div class="nav-tabs">
          <div
            v-for="(tab, index) in tabs"
            :key="index"
            class="nav-tab"
            :class="{ active: activeTab === index }"
            @click="activeTab = index"
          >
            {{ tab.title }}
            <a-tooltip v-if="tab.title === '实名举报'" placement="top">
              <template #title>
                实名举报便于我们更快处理您的举报及反馈。
              </template>
              <image v-if="tab.icon" :src="tab.icon" mode="" />
            </a-tooltip>
          </div>
          <div class="underline" :style="{ left: underlineLeft + 'px' }"></div>
        </div>
      </view>

      <view class="form_container">
          <ReportForm :key="activeTab" :activeKey="activeTab" :state="getFormState"/>
      </view>

    </view>

  </view>
</template>

<script>
import ReportForm from "./components/report-form.vue";

export default {
    components: {
      ReportForm
    },
    data() {
        return {
            imgSrc: '', //图片全局获取
            activeTab: 0,
            tabs: [
              {
                title: "实名举报",
                icon: '',
              },
              {
                title: "匿名举报",
              },
            ],
            underlineLeft: 0, // 初始化下划线位置
        };
    },
    computed: {
      getFormState() {
        return {
          ...(this.activeTab === 0 ?
                  {
                    username: "",
                    email: "",
                    phone: "",
                  }
                  :
                  {}
          ),
          type: undefined,
          city: undefined,
          person: "",
          department: "",
          date: undefined,
          content: ""
        }
      }
    },
    watch: {
      activeTab: {
        immediate: true, // 立即执行一次
        handler(newVal) {
          this.$nextTick(() => {
                    uni.createSelectorQuery().in(this).select('.nav-tabs').boundingClientRect(result1 => {
                        if (result1) {
                          uni.createSelectorQuery().in(this).select('.active').boundingClientRect(result => {
                              if (result) {
                                //  计算下划线位置
                                this.underlineLeft = result.left-result1.left;
                              } 
                          }).exec();
                        } 
                    }).exec();

          });
        },
      },
    },
    mounted: function() {
      
    },
    methods: {
    },
};
</script>

<style>
page {
  background-color: #fff;
}
</style>

<style lang="less" scoped>

.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 168rpx;
  background: #ffffff;
  box-shadow: 0rpx 4rpx 30rpx 0rpx rgba(0,0,0,0.15); 
  .header-icon_phone{
	background-color: pink;
    display: flex;
    align-items: center;
    margin-left: 54rpx;
    width: 152rpx;
    height: 152rpx;
  }
  .header-icon_pc{
	background-color: pink;
    display: flex;
    align-items: center;
    margin-left: 70rpx;
    width: 99px;
    height: 50px;
  }

}

.headerTitle{
  margin: 80rpx auto 40rpx;
  font-size: 24px;
  font-family: PingFang SC, PingFang SC-Medium;
  color: #d7000f;
  text-align: center;
  font-weight: 700;

}

.notice{
  margin: 0 30rpx;
  display: flex;
  background: #fdf2f3;
  border-radius: 32rpx;
  padding: 30rpx;
  .notice_left{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 174px;
      height: 100%;
      image{
			background-color: pink;

        display: block;
        width: 98px;
        height: 100px;
      }
  }
  .notice_right{
    .right_title{
      font-size: 20px;
      font-family: PingFang SC, PingFang SC-Medium;
      color: #222222;
      line-height: 28px;
      font-weight: 700;
    }
    .right_content{
      margin-top: 20rpx;
      font-size: 18px;
      font-family: PingFang SC, PingFang SC-Regular;
      font-weight: Regular;
      text-align: left;
      color: #444;
      line-height: 25px;
    }
    .right_way{
      margin-top: 24px;
      font-size: 20px;
      font-family: PingFang SC, PingFang SC-Medium;
      font-weight: Medium;
      text-align: left;
      color: #222222;
      line-height: 28px;
      font-weight: 700;
    }
    .right_address{
      margin-top: 20rpx;
      font-size: 18px;
      font-family: PingFang SC, PingFang SC-Medium;
      font-weight: Medium;
      text-align: left;
      color: #d7000f;
      line-height: 25px;
    }
  }
}

.form_title{
    margin: 20rpx 30rpx 0;
    font-size: 32rpx;
    font-family: PingFang SC, PingFang SC-Medium;
    .nav-tabs {
      display: flex;
      border-bottom: 1px solid #ccc;
      position: relative; /* 添加相对定位，以便下划线绝对定位 */
      .nav-tab {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20rpx 0;
        width: 224rpx;
        cursor: pointer;
        image{
			background-color: pink;
          margin-left: 16rpx;
          width: 28rpx;
          height: 28rpx;
        }
      }
      .active {
        color: red;
      }
      .underline {
        z-index: 999;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 224rpx;
        height: 2px;
        background-color: red;
        transition: left 0.3s ease; /* 添加过渡效果 */
      }
    }
}

.form_container{
    margin: 20rpx 30rpx 0;
}

// 移动端
@media screen and (max-width: 767px) {

}
// pc
@media screen and (min-width: 768px) {
  .header {
    height: 86px;
    background: #ffffff;
    box-shadow: 0px 2px 15px 0px rgba(0,0,0,0.15); 
  }
  .main{
    max-width: 1250px;
    margin: 0 auto;
  }
  .headerTitle{
    margin: 54px auto 32px;
  }
  .notice{
    .right_content{
      margin-top: 16px;
    }
    .right_address{
      margin-top: 16px;
    }
  }
  .form_title{
    margin: 20px 30px 0;
  }
  .form_container{
    margin: 20px 30px 0;
  }
}
</style>