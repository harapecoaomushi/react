export const getHoui = async (query) => {
  try {
    const Houi = ["東", "西", "南", "北", "南東", "南西", "北東", "北西"];
    const min = 0;
    const max = houi.length - 1;
    const index = Math.floor(Math.random() * (max - min + 1)) + min;
    return { result: houi[index] };
  } catch (e) {
    throw Error("Error while getting Houi.");
  }
};