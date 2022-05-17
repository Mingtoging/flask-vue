<template class="tablet">
	<v-app class="tablet">
		<v-main>
			<router-view name="menu"></router-view>
			<router-view class="contentLayout" name="content"></router-view>
		</v-main>
		<Snackbar></Snackbar>
	</v-app>
</template>

<script>
import Snackbar from '@/components/common/Snackbar';

export default {
  data: () => ({
    id: '',
    name: '',
  }),
  components: {
    Snackbar,
  },
};
</script>

<style>
.contentLayout {
	height: 100%;
	max-height: 100%;
}
</style>
