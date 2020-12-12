import SideBar from "@/components/SidebarPlugin/SideBar.vue"
import {shallowMount} from '@vue/test_api-utils'

describe("sidebar.vue", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(SideBar, {
            methods: {
                testMethod: () => {
                }
            }
        })
    })
    it("renders", () => {
        expect(wrapper.exists()).toBe(true)
    })

    // it("does h1 exist", () => {
    //     expect(wrapper.find("h1").text()).toBe("Logged in")
    // })
})
