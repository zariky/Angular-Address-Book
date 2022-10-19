import { NamePipe } from './name.pipe';

describe('NamePipe', () => {
  it('create an instance', () => {
    const pipe = new NamePipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms all segments', () => {
    const pipe = new NamePipe();
    const testUser = { title: 'TestTitle', first: 'TestFirst', last: 'TestLast' };
    const result = pipe.transform(testUser);
    expect(result).toEqual('TestTitle TestFirst TestLast');
  });

  it('transforms name with missing title segment', () => {
    const pipe = new NamePipe();
    const testUser = { title: '', first: 'TestFirst', last: 'TestLast' };
    const result = pipe.transform(testUser);
    expect(result).toEqual('TestFirst TestLast');
  });

  it('transforms name with missing first segment', () => {
    const pipe = new NamePipe();
    const testUser = { title: 'TestTitle', first: '', last: 'TestLast' };
    const result = pipe.transform(testUser);
    expect(result).toEqual('TestTitle TestLast');
  });

  it('transforms name with missing last segment', () => {
    const pipe = new NamePipe();
    const testUser = { title: 'TestTitle', first: 'TestFirst', last: '' };
    const result = pipe.transform(testUser);
    expect(result).toEqual('TestTitle TestFirst');
  });

  it('transforms name with missing all segments', () => {
    const pipe = new NamePipe();
    const testUser = { title: '', first: '', last: '' };
    const result = pipe.transform(testUser);
    expect(result).toEqual('');
  });
});
