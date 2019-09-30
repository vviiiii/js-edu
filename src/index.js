/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */

const speedConfig = {
    family: 4,
    friends: 10,
    normal_life: 20,
    profession: 30,
    carrier: 40,
    top_peformance: 60
}
const knowsProgramming = true;

module.exports = function getTimeForEducation(
    focus = 'family',
    knowsProgramming = true,
    config = { family: 4 }
) {
    const courseHour = 800;
    const hourWithoutKnowledge = courseHour + 500;
    let cursWeeks = Math.ceil(courseHour / config[focus]);
    if (!knowsProgramming) {
        cursWeeks = Math.ceil(hourWithoutKnowledge / config[focus]);
    }
    return cursWeeks;
};