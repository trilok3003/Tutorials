import { GradePipe } from './grade.pipe';

describe('GradePipe', () => {
  it('create an instance', () => {
    const pipe = new GradePipe();
    expect(pipe).toBeTruthy();
  });
  it('should assign A Grade while marks greater than 89', () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(93);
    expect(grade).toBe('A')
  })
  it('should assign B Grade while marks greater than 79', () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(81);
    expect(grade).toBe('B')
  })
  it('should assign C Grade while marks greater than 69', () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(71);
    expect(grade).toBe('C')
  })
  it('should assign D Grade while marks greater than 59', () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(61);
    expect(grade).toBe('D')
  })
  it('should assign E Grade while marks greater than 49', () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(51);
    expect(grade).toBe('E')
  })
  it('should assign FAIL Grade while marks less than 35', () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(34);
    expect(grade).toBe('FAIL')
  })
});
