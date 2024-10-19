<template>
  <view class="reportCorruption" style="padding-bottom: 50px;">
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
         廉洁举报
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
              <svg style="margin-left:6px;" viewBox="64 64 896 896" focusable="false" data-icon="question-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"></path></svg>
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
    user-select: text;
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
        z-index: 2;
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