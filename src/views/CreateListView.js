import ListView from './ListView.vue';
import bus from "../utils/bus.js";

export default function createListView(name) {
    // HOC
    // 반복되는 lifecycle hook을 HOC로 끌어올려서 구현
    // 페이지 컴포넌트 재활용
    // 컴포넌트 깊이가 깊어짐 레벨이 깊어짐
    return {
        // 재사용할 컴포넌트 옵션들이 들어갈 자리
        name,
        created() {
            bus.$emit("start:spinner");
            // setTimeout(() => {
            this.$store
                .dispatch("FETCH_LIST", this.$route.name)
                .then(bus.$emit("end:spinner"))
                .catch((error) => console.log(error));
            // }, 2000);
        },
        render(createElement) {
            return createElement(ListView);
        }

    }


}