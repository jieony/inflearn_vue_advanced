<template>
  <div>
    <div>
      <section>
        <!-- 사용자 상세 정보 -->
        <div class="user-container">
          <div>
            <i class="fa fa-user"></i>
          </div>
          <div class="user-description">
            <div>
              <slot name="username">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
              </slot>
            </div>
            <div class="time">
              <slot name="time">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
              </slot>
              <slot name="karma">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
              </slot>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  //   computed: {
  //     userInfo() {
  //       return this.$store.state.user;
  //     },
  //   },
  props: {
    info: Object,
  },
};
</script>


<style scoped>
.user-container {
  padding: 0.5rem;
  display: flex;
  align-items: center;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>