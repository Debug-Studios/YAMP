<template>
    <Page>
        <GridLayout rows="*, auto">
            <StackLayout row="0">
                <Label text="msg"></Label>
            </StackLayout>
            <BottomNavigation backgroundColor="black" keyLineColor="black" @tabSelected="onBottomNavigationTabSelected" row="1">
                <BottomNavigationTab title="First" icon="icon" />
                <BottomNavigationTab title="Second" icon="icon" />
                <BottomNavigationTab title="Third" icon="icon" />
            </BottomNavigation>
        </GridLayout>
    </Page>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello World!'
      }
    }
  }
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
