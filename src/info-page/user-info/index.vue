<script lang="ts" setup>
import TnPicker from '@tuniao/tnui-vue3-uniapp/components/picker/src/picker.vue'
import TnDateTimePicker from '@tuniao/tnui-vue3-uniapp/components/date-time-picker/src/date-time-picker.vue'
import TnUpdateUserInfoPopup from 'tnuiv3p-tn-update-user-info-popup/index.vue'
import { useUserInfo } from './composables'
import { UserSex } from '@/types/store/user'

const {
  userInfo,
  showUpdateUserInfoPopup,
  showSexPicker,
  showBirthdayPicker,
  showProfessionPicker,
  sexPickerData,
  professionPickerData,
  openUpdateUserInfoPopup,
  openSexPicker,
  openBirthdayPicker,
  openProfessionPicker,
} = useUserInfo()
</script>

<template>
  <TnNavbar fixed :bottom-shadow="false" />
  <view class="user-info">
    <view class="avatar-nickname">
      <view class="left">
        <view class="nickname" @tap.stop="openUpdateUserInfoPopup">
          {{ userInfo.nickname }}
        </view>
        <view class="desc">
          <input
            class="input"
            :value="userInfo.desc"
            placeholder="请输入描述"
            placeholder-style="color: var(--tn-color-gray-disabled)"
          />
        </view>
      </view>
      <view class="avatar" @tap.stop="openUpdateUserInfoPopup">
        <image class="tn-image" :src="userInfo.avatar" mode="aspectFill" />
      </view>
    </view>

    <view class="info-item">
      <view class="left">
        <view class="item-title">绑定手机号</view>
        <view class="content">
          {{ userInfo.phone || '未绑定' }}
        </view>
      </view>
      <view class="right">
        <TnIcon name="right" />
      </view>
    </view>
    <view class="info-item">
      <view class="left">
        <view class="item-title">姓名</view>
        <view class="content">
          <input
            class="input"
            :value="userInfo.username"
            placeholder="请输入姓名"
            placeholder-style="color: var(--tn-color-gray-disabled)"
          />
        </view>
      </view>
    </view>
    <view class="info-item" @tap.stop="openSexPicker">
      <view class="left">
        <view class="item-title">性别</view>
        <view class="content">
          {{ UserSex?.[userInfo.sex] || '请选择性别' }}
        </view>
      </view>
      <view class="right">
        <TnIcon name="right" />
      </view>
    </view>
    <view class="info-item" @tap.stop="openBirthdayPicker">
      <view class="left">
        <view class="item-title">生日</view>
        <view class="content">
          {{ userInfo.birthday || '请选择生日' }}
        </view>
      </view>
      <view class="right">
        <TnIcon name="right" />
      </view>
    </view>
    <view class="info-item" @tap.stop="openProfessionPicker">
      <view class="left">
        <view class="item-title">职业</view>
        <view class="content">
          {{ userInfo.profession || '请选择职业' }}
        </view>
      </view>
      <view class="right">
        <TnIcon name="right" />
      </view>
    </view>
  </view>

  <TnUpdateUserInfoPopup
    v-model:show="showUpdateUserInfoPopup"
    v-model:avatar="userInfo.avatar"
    v-model:nickname="userInfo.nickname"
  />
  <!-- 性别选择 -->
  <TnPicker
    v-model:open="showSexPicker"
    v-model="userInfo.sex"
    :data="sexPickerData"
  />
  <!-- 生日选择 -->
  <TnDateTimePicker
    v-model:open="showBirthdayPicker"
    v-model="userInfo.birthday"
    type="date"
    format="YYYY-MM-DD"
    min-time="1900/01/01"
  />
  <!-- 职业选择 -->
  <TnPicker
    v-model:open="showProfessionPicker"
    v-model="userInfo.profession"
    :data="professionPickerData"
  />
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
