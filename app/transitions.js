export default function() {
  this.transition(
    this.hasClass('menuIsVisible'),
    this.toValue(true),
    this.use('fade',  { duration: 500 })
  );
}
