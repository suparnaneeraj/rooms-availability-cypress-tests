describe('Verify the count of premium and economy rooms occupied along with the amount earned ', () => {

    before(function () {
        cy.fixture('data.json').as('data')
    })

    it('should correctly calculate the premium and economy rooms usage', function () {
        cy.visit(this.data.url);
        (this.data.test_data).forEach(element_data => {
            const data_object = JSON.parse(JSON.stringify(element_data))
            cy.get('div.main').contains("Premium Rooms:").parent('div').find('input').clear()
            cy.get('div.main').contains("Premium Rooms:").parent('div').find('input').type(data_object.free_premium_rooms)

            cy.get('div.main').contains("Economy Rooms:").parent('div').find('input').clear()
            cy.get('div.main').contains("Economy Rooms:").parent('div').find('input').type(data_object.free_economy_rooms)
            cy.get('button[type="submit"]').click()

            let occupancyData = []
            let i = 0
            cy.get('div.main > div').find('p').each((element) => {
                const nodeContent = element.text()
                const nodeValue = nodeContent.split(":")
                occupancyData[i] = nodeValue[1].trim()
                i++;
            }).then((roomData) => {
                expect(occupancyData[0]).to.equal(data_object.free_premium_rooms)
                expect(occupancyData[1]).to.equal(data_object.free_economy_rooms)
                expect(occupancyData[2]).to.equal(data_object.usage_premium)
                expect(occupancyData[3]).to.equal(data_object.usage_economy)
            })
        });
    })
})
