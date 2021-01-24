import { assert } from "chai";
import { mount, createLocalVue } from "@vue/test-utils";
import Songs from "@/components/Songs.vue";
import Vuetify from "vuetify";

describe("Songs.vue", () => {
   let localVue;
  let vuetify;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuetify);
    vuetify = new Vuetify();
    
  });
  it.only("Default List of Albums", () => {
    const wrapper = mount(Songs, {
      vuetify,
      localVue,
      stubs: ["VTextField", "VSnackbar"]
    });
    let expectedLength = 0;
    const participants = wrapper.vm.listOfAlbums;
    assert.equal(participants.length, expectedLength);
  });
  it.only("Textfield exists", () => {
    const wrapper = mount(Songs, {
      vuetify,
      localVue,
      stubs: ["VTextField", "VSnackbar"]
    });
    const textfield = wrapper.find("#textfield1");
    assert.exists(textfield);
  });
});
