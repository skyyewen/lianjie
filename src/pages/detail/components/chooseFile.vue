<template>
      <view class="upload">
        <view class="upload_file">
          <view class="upload_file_title">附件</view>
          <view @click="uploadFile" class="upload-container">
            <image class="upload_img" src="" mode="" />
            <view class="plus-icon">
              <view class="plus-icon-plus">+</view>
              <view class="plus-icon-text">上传照片</view>
            </view>
          </view>
        </view>

        <view class="ant-upload-hint">
          支持扩展名：.jpg .png .jpeg .bmp .doc .ppt .xls .xlsx .docx .pptx .zip .rar .pdf
        </view>

        <view class="file-list">
          <view v-for="(file, index) in fileList" :key="index" class="file-item">
            <text class="file-name">{{ file.name }}</text>
            <text class="delete-btn" @click="deleteFile(index)">×</text>
          </view>
        </view>
      </view>
</template>

<script>
export default {
    data() {
      return {
        fileList: []
      }
    },
    methods: {
        uploadFile() {
            uni.chooseFile({
                count: 1,
                extension: ['.jpg', '.png', '.jpeg', '.bmp', '.doc', '.ppt', '.xls', '.xlsx', '.docx', '.pptx', '.zip', '.rar', '.pdf'],
                success: (res) => {
                    console.log(res);
                    const file = res.tempFiles[0];
                    const allowedExtensions = ['.jpg', '.png', '.jpeg', '.bmp', '.doc', '.ppt', '.xls', '.xlsx', '.docx', '.pptx', '.zip', '.rar', '.pdf'];
                    const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
                    
                    if (allowedExtensions.includes(fileExtension)) {
                        this.fileList.push(file);
                        uni.showToast({
                            title: '文件已添加',
                            icon: 'success'
                        });
                    } else {
                        uni.showToast({
                            title: '不支持的文件类型',
                            icon: 'none'
                        });
                    }
                },
                fail: (error) => {
                    console.error('选择文件失败：', error);
                    uni.showToast({
                        title: '选择文件失败',
                        icon: 'none'
                    });
                }
            });
        },
        deleteFile(index) {
            this.fileList.splice(index, 1)
        },
    },
}
</script>

<style scoped lang="less">
.upload{
  .upload_file{
    display: flex;
    flex-direction: column;
    align-items: baseline;
    .upload_file_title{
      color: rgba(0, 0, 0, 0.65);
      text-align: left;
      font-size: 14px;
      font-family: PingFang SC, PingFang SC-Regular;
      font-weight: Regular;
      text-align: right;
      line-height: 22px;
    }
    .upload-container{
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      .plus-icon{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        .plus-icon-plus{
          font-size: 30px;
          color: rgba(0,0,0,0.45);
        }
        .plus-icon-text{
          padding-bottom: 14px;
          font-size: 14px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: Regular;
          text-align: center;
          color: rgba(0,0,0,0.65);
          line-height: 22px;
        }
      }
    }
    .upload_img{
      margin-top: 20rpx;
      width: 104px;
      height: 104px;
      background: rgba(0,0,0,0.04);
      border: 2rpx dashed rgba(0,0,0,0.15);
      border-radius: 4rpx;
    }
  }
  .ant-upload-hint{
    margin-top: 10px;
  }

  .file-list {
    margin-top: 20rpx;
    .file-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6rpx 10rpx;
      margin-bottom: 10rpx;
      background-color: #f5f5f5;
      border-radius: 6rpx;
      transition: all 0.3s ease;
      &:hover{
        background-color: #e6e6e6;
      }
      .file-icon{
        width: 14px;
        height: 14px;
      }
      .file-name {
        margin-left: 5px;
        font-size: 14px;
        font-family: PingFang SC, PingFang SC-Regular;
        font-weight: Regular;
        text-align: left;
        color: #d7000f;
        line-height: 22px;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .delete-btn {
        padding: 0 10rpx;
        color: #999;
        cursor: pointer;
        transition: color 0.3s ease;
        
        &:hover {
          color: #f56c6c;
        }
      }
    }
  }
}

// pc
@media screen and (min-width: 768px) {
  .upload{
    .upload_file{
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      .upload_file_title{
        color: rgba(0, 0, 0, 0.65);
        width: 110px;
        margin-right: 10px;
        text-align: right;
        font-size: 14px;
        font-family: PingFang SC, PingFang SC-Regular;
        font-weight: Regular;
        color: rgba(0, 0, 0, 0.65);
        line-height: 22px;
      }
      .upload_img{
        margin-top: 0;
      }
    }
    .ant-upload-hint{
      margin-left: 120px;
    }
    .file-list {
      margin-left: 120px;
    }
  }
}

</style>