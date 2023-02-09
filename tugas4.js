var siswa1 = 169;
var siswa2 = 173;
var siswa3 = 180;

if (siswa1 > siswa2 && siswa2 > siswa3) {
  console.log(siswa1, siswa2, siswa3);
} else if (siswa1 > siswa3 && siswa3 > siswa2) {
  console.log(siswa1, siswa3, siswa2);
} else if (siswa2 > siswa1 && siswa1 > siswa3) {
  console.log(siswa2, siswa1, siswa3);
} else if (siswa2 > siswa3 && siswa3 > siswa1) {
  console.log(siswa2, siswa3, siswa1);
} else if (siswa3 > siswa2 && siswa2 > siswa1) {
  console.log(siswa3, siswa2, siswa1);
} else if (siswa3 > siswa1 && siswa1 > siswa2) {
  console.log(siswa3, siswa1, siswa2);
}
