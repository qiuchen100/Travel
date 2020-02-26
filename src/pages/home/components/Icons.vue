<template>
  <div class="icons">
    <swiper :options="iconOption" class="swiper-container">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  /* eslint-disable */
  name: "HomeIcons",
  data() {
    return {
      iconOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      iconList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "热门景点"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png",
          desc: "万龙滑雪"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
          desc: "故宫"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png",
          desc: "广州塔"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "一日游"
        },
        {
          id: "0006",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png",
          desc: "古北冰镇"
        },
        {
          id: "0007",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
          desc: "珠江夜游"
        },
        {
          id: "0008",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png",
          desc: "岭南印象园"
        },
        {
          id: "0009",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png",
          desc: "动植物园"
        },
        {
          id: "0010",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png",
          desc: "自然风光"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>


<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icons {
  margin-top: 0.1rem;
}

.icon {
  position: relative;
  width: 25%;
  overflow: hidden;
  float: left;
  height: 0;
  padding-bottom: 25%;
}

.icon-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.44rem;
  box-sizing: border-box;
  padding: 0.1rem;
}

.icon-img-content {
  height: 100%;
  display: block;
  margin: 0 auto;
}

.icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  color: $darkTextColor;
  text-align: center;
  ellipsis();
}
</style>