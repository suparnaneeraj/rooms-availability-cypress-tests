
describe('Verify the count of premium and economy rooms occupied along with the amount earned ', () => {
    let getText

    before(function () {
        cy.fixture('data.json').as('data')
    })

    it('should correctly calculate the premium and economy rooms usage', function () {
        cy.visit(this.data.url);
        (this.data.test_data).forEach(element_data => {
            cy.log(element_data)
            const data_object = JSON.parse(JSON.stringify(element_data))
            cy.get('div.main').contains("Premium Rooms:").parent('div').find('input').clear()
            cy.get('div.main').contains("Premium Rooms:").parent('div').find('input').type(data_object.free_premium_rooms)
            cy.get('div.main').contains("Economy Rooms:").parent('div').find('input').clear()
            cy.get('div.main').contains("Economy Rooms:").parent('div').find('input').type(data_object.free_economy_rooms)
            cy.get('button[type="submit"]').click()

            var array_usage_values = []
            let i = 0
            cy.get('div.main > div').find('p').each(($el, index, $list) => {
                const result_text = $el.text()

                const array_text = result_text.split(":")

                array_usage_values[i] = array_text[1].trim()
                i++;
            }).then(($list) => {
                expect(array_usage_values[0]).to.equal(data_object.free_premium_rooms)
                expect(array_usage_values[1]).to.equal(data_object.free_economy_rooms)
                expect(array_usage_values[2]).to.equal(data_object.usage_premium)
                expect(array_usage_values[3]).to.equal(data_object.usage_economy)

            })

        });

    })
})
