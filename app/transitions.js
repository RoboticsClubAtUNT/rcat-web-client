export default function() {
  this.transition(
    this.fromRoute('index'),
    this.toRoute('guides'),
    this.use('fade', { duration: 200 }),
    this.reverse('fade', { duration: 200 })
  );
}
